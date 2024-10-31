// TaskForm.tsx
import React from 'react';
import Task from "@/components/task";
import { Button } from '@nextui-org/button';
interface TaskFormProps {
  onSubmit: (task: { task: string; assignTo: string; status: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [task, setTask] = React.useState('');
  const [assignTo, setAssignTo] = React.useState('');
  const [status, setStatus] = React.useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ task, assignTo, status });
  };
console.log("Hello");
  return (
    <form onSubmit={handleSubmit}>
      <Task />
      
    </form>
  );
};

export default TaskForm;