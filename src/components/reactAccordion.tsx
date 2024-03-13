import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Props {
  title: string;
  content: { _ref: string; slug: string; title: string }[];
}

export default function ReactAccordion(props: Props) {
  return <Accordion className="not-prose" type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>{props.title}</AccordionTrigger>
      <AccordionContent>
        <ul className="ml-6 list-disc [&>li]:mt-2">
          {props.content.map(({ slug, title }: { slug: string, title: string }) => (
            <li key={title}>
              <a className="underline" href={slug}>{title}</a>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
}
