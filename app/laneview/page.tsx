'use client';
import Task from "@/components/task";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import GridLayout from "react-grid-layout";

export default function Home() {
  const [components, setComponents] = useState<JSX.Element[]>([]);
  const handleClick = () => {
    setComponents([...components, <Task key={components.length} />]);
  };

  const layout = [
    { i: "lane1", x: 0, y: 0, w: 4, h: 10 },
    { i: "lane2", x: 4, y: 0, w: 4, h: 2 },
    { i: "lane3", x: 8, y: 0, w: 4, h: 2 },
  ];

  return (
    <section className="flex flex-wrap justify-center items-center gap-4">
      <Button size="sm"  onClick={handleClick} color="primary" style={{ position: 'fixed', bottom: '45px',  left: '5px' }}>
        Add Task
      </Button>
      
      <Button size="sm"  onClick={handleClick} color="primary" style={{ position: 'fixed', bottom: '10px',  left: '5px' }}>
        Save Board
      </Button>

      <div className="flex flex-wrap justify-center items-center gap-4">
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
        >
          <div key="lane1" className="lane">
            <h2>Lane 1</h2>
            {/* Add tasks to this lane */}
            <Task />
          </div>
          <div key="lane2" className="lane">
            <h2>Lane 2</h2>
            {/* Add tasks to this lane */}
          </div>
          <div key="lane3" className="lane">
            <h2>Lane 3</h2>
            {/* Add tasks to this lane */}
          </div>
        </GridLayout>
      </div>
    </section>
  );
}