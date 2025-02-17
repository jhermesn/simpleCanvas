"use client"

import type React from "react"
import { useRef, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Pencil, Square, Circle, Eraser, PenLineIcon as Line, Undo, Redo, Trash2 } from "lucide-react"

interface Point {
  x: number
  y: number
}

interface CanvasState {
  imageData: ImageData
}

const CANVAS_SIZE = 4096

export default function SimpleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)
  const [tool, setTool] = useState("pencil")
  const [isDrawing, setIsDrawing] = useState(false)
  const [startPos, setStartPos] = useState<Point>({ x: 0, y: 0 })
  const [color, setColor] = useState("#000000")
  const [lineWidth, setLineWidth] = useState(2)
  const [undoStack, setUndoStack] = useState<CanvasState[]>([])
  const [redoStack, setRedoStack] = useState<CanvasState[]>([])

  const saveState = useCallback(() => {
    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return

    const imageData = context.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    setUndoStack((prev) => [...prev, { imageData }])
    setRedoStack([])
  }, [])

  const initializeCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = CANVAS_SIZE
    canvas.height = CANVAS_SIZE

    const context = canvas.getContext("2d")
    if (!context) return

    context.lineCap = "round"
    context.strokeStyle = color
    context.lineWidth = lineWidth
    contextRef.current = context

    if (undoStack.length === 0) {
      context.fillStyle = "white"
      context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
      saveState()
    } else {
      context.putImageData(undoStack[undoStack.length - 1].imageData, 0, 0)
    }
  }, [color, lineWidth, saveState, undoStack])

  useEffect(() => {
    initializeCanvas()
  }, [initializeCanvas])

  const getEventPosition = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>): Point => {
      const canvas = canvasRef.current
      if (!canvas) return { x: 0, y: 0 }

      const rect = canvas.getBoundingClientRect()
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY

      return {
        x: (clientX - rect.left) * (CANVAS_SIZE / rect.width),
        y: (clientY - rect.top) * (CANVAS_SIZE / rect.height),
      }
    },
    [],
  )

  const startDrawing = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
      const pos = getEventPosition(e)
      setIsDrawing(true)
      setStartPos(pos)

      if (tool === "pencil" || tool === "eraser") {
        contextRef.current?.beginPath()
        contextRef.current?.moveTo(pos.x, pos.y)
      }
    },
    [getEventPosition, tool],
  )

  const draw = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
      if (!isDrawing || !contextRef.current) return

      const pos = getEventPosition(e)
      const ctx = contextRef.current

      ctx.strokeStyle = tool === "eraser" ? "white" : color
      ctx.lineWidth = lineWidth

      switch (tool) {
        case "pencil":
        case "eraser":
          ctx.lineTo(pos.x, pos.y)
          ctx.stroke()
          break
        case "line":
          ctx.putImageData(undoStack[undoStack.length - 1].imageData, 0, 0)
          ctx.beginPath()
          ctx.moveTo(startPos.x, startPos.y)
          ctx.lineTo(pos.x, pos.y)
          ctx.stroke()
          break
        case "rectangle":
          ctx.putImageData(undoStack[undoStack.length - 1].imageData, 0, 0)
          ctx.beginPath()
          ctx.rect(startPos.x, startPos.y, pos.x - startPos.x, pos.y - startPos.y)
          ctx.stroke()
          break
        case "circle":
          ctx.putImageData(undoStack[undoStack.length - 1].imageData, 0, 0)
          ctx.beginPath()
          const radius = Math.sqrt(Math.pow(pos.x - startPos.x, 2) + Math.pow(pos.y - startPos.y, 2))
          ctx.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI)
          ctx.stroke()
          break
      }
    },
    [color, getEventPosition, isDrawing, lineWidth, startPos, tool, undoStack],
  )

  const stopDrawing = useCallback(() => {
    if (isDrawing) {
      saveState()
    }
    setIsDrawing(false)
    contextRef.current?.beginPath()
  }, [isDrawing, saveState])

  const undo = useCallback(() => {
    if (undoStack.length <= 1) return

    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return

    const currentState = undoStack[undoStack.length - 1]
    const previousState = undoStack[undoStack.length - 2]

    setRedoStack((prev) => [...prev, currentState])
    setUndoStack((prev) => prev.slice(0, -1))

    context.putImageData(previousState.imageData, 0, 0)
  }, [undoStack])

  const redo = useCallback(() => {
    if (redoStack.length === 0) return

    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return

    const nextState = redoStack[redoStack.length - 1]

    setUndoStack((prev) => [...prev, nextState])
    setRedoStack((prev) => prev.slice(0, -1))

    context.putImageData(nextState.imageData, 0, 0)
  }, [redoStack])

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const context = contextRef.current
    if (!canvas || !context) return

    context.fillStyle = "white"
    context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE)
    saveState()
  }, [saveState])

  return (
    <div className="relative w-full h-full overflow-hidden bg-gray-100">
      <div className="fixed top-4 right-4 flex flex-wrap gap-2 bg-white p-2 rounded-lg shadow-md z-10 max-w-[calc(100%-80px)]">
        <Button variant={tool === "pencil" ? "default" : "outline"} size="icon" onClick={() => setTool("pencil")}>
          <Pencil className="h-4 w-4" />
        </Button>
        <Button variant={tool === "line" ? "default" : "outline"} size="icon" onClick={() => setTool("line")}>
          <Line className="h-4 w-4" />
        </Button>
        <Button variant={tool === "rectangle" ? "default" : "outline"} size="icon" onClick={() => setTool("rectangle")}>
          <Square className="h-4 w-4" />
        </Button>
        <Button variant={tool === "circle" ? "default" : "outline"} size="icon" onClick={() => setTool("circle")}>
          <Circle className="h-4 w-4" />
        </Button>
        <Button variant={tool === "eraser" ? "default" : "outline"} size="icon" onClick={() => setTool("eraser")}>
          <Eraser className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={undo} disabled={undoStack.length <= 1}>
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={redo} disabled={redoStack.length === 0}>
          <Redo className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={clearCanvas}>
          <Trash2 className="h-4 w-4" />
        </Button>
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300">
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-10 h-10 transform -translate-x-1 -translate-y-1 cursor-pointer"
          />
        </div>
        {(tool === "pencil" || tool === "line" || tool === "eraser" || tool === "rectangle" || tool === "circle") && (
          <div className="flex items-center gap-2 ml-2">
            <Slider
              value={[lineWidth]}
              onValueChange={(value) => setLineWidth(value[0])}
              min={1}
              max={50}
              step={1}
              className="w-32"
            />
          </div>
        )}
      </div>
      <div
        className="w-full h-full overflow-auto"
        style={{
          cursor: tool === "eraser" ? "crosshair" : "default",
        }}
      >
        <canvas
          ref={canvasRef}
          className="touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
    </div>
  )
}

