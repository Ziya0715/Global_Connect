"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import styles from "./Accordion.module.scss";

export function Accordion({ items, type = "single", defaultValue }) {
  return (
    <AccordionPrimitive.Root
      type={type}
      collapsible={type === "single" ? true : undefined}
      defaultValue={defaultValue}
      className={styles.accordion}
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.value || item.title}
          value={item.value || item.title}
          className={styles.item}
        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className={styles.trigger}>
              {item.title}
              <ChevronDown className={styles.icon} size={20} aria-hidden />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className={styles.content}>
            <div className={styles.contentInner}>{item.content}</div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
