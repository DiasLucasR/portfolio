"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectShowcaseProps {
  title: string
  description: string
  images: string[]
  techStack: string[]
}

export function ProjectShowcase({ title, description, images, techStack }: ProjectShowcaseProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <Card className="w-full  mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        
      </CardHeader>
      <CardContent>
      <div className="mt-4 flex flex-wrap gap-2 my-3">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className=" hover:bg-gray-700 py-2 px-2">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((src, index) => (
                <div className="flex-[0_0_100%] min-w-0 relative" key={index}>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Project image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

