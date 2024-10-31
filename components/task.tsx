'use client'
import React from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Textarea } from "@nextui-org/input";
import { people, status} from "@/config/data";
import GridLayout from "react-grid-layout";
import {Spacer} from "@nextui-org/spacer";

import { Autocomplete, AutocompleteItem } from "@nextui-org/react";


export default function Task() {

  return (
    <section >
      
      <div>
        <Spacer x={8} y={4} />
        <Snippet hideCopyButton hideSymbol variant="bordered">

          <Textarea
            label="Task"
            variant="bordered"
            placeholder="Enter your task"
            disableAnimation
            disableAutosize
            classNames={{
              base: "max-w-xs",
              input: "resize-y min-h-[40px]",
            }}
          />
          <Autocomplete
            defaultItems={people}
            label="Assign to"
            placeholder="Name"
            allowsCustomValue={true}
            className="max-w-xs"
          >
            {(people) => <AutocompleteItem key={people.value}>{people.label}</AutocompleteItem>}
          </Autocomplete>
          <Autocomplete
            defaultItems={status}
            label="Status"
            placeholder="Enter Status"
            allowsCustomValue={true}
            className="max-w-xs"
          >
            {(status) => <AutocompleteItem key={status.value}>{status.label}</AutocompleteItem>}
          </Autocomplete>
        </Snippet>
        <Spacer x={4} y={4} />

      </div>

    </section>
    
  );
}
