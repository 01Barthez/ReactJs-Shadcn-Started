import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function App() {
  return (
    <>
    <h1 className="text-center text-3xl font-bold my-10">Welcome here</h1>
    <div className="m-10">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-bold">Hello</AccordionTrigger>
          <AccordionContent>
            It's a pleasure to us to meet you, hope you're ok !
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-bold">Ready ?</AccordionTrigger>
          <AccordionContent>
            That's was just a single example using React with tailwind + shadcn, you can delete this content file abd get starded your projet !
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    
    </div>
    
    <Button className="my-10">Next Step</Button>
    </>
  )
}