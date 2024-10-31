'use client'
import React, { useState } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Textarea } from "@nextui-org/input";
import { people } from "@/config/data";
import GridLayout from "react-grid-layout";
import { Autocomplete, AutocompleteItem, Button, ScrollShadow, Spacer } from "@nextui-org/react";
import Task from "@/components/task";
import TaskForm from "./TaskForm";

export default function Home() {
  const [components, setComponents] = useState<JSX.Element[]>([]);
  const handleClick = () => {
    setComponents([...components, <Task key={components.length} />]);
  };
  return (
    <section className="flex flex-wrap justify-center items-center gap-4">
      <Button size="sm"  onClick={handleClick} color="primary" style={{ position: 'fixed', bottom: '45px',  left: '5px' }}>
        Save Board
      </Button>
      
      <Button size="sm"  onClick={handleClick} color="primary" style={{ position: 'fixed', bottom: '10px',  left: '5px' }}>
        Add Task
      </Button>

      < div className="flex flex-wrap justify-center items-center gap-4" >
        {components}
      <TaskForm onSubmit={(task) => setComponents([...components, <Task key={components.length} {...task} />])} />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />

      </div>

    </section>
  );
}
