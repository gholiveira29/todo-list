import { PlusCircle } from 'phosphor-react';

import styles from './InputAddTask.module.css';
import { ChangeEvent } from 'react';

interface inputTaskProps {
    newContentTask: string;
    createNewTask: (task: ChangeEvent<HTMLInputElement>) => void;
    newTaskChange: (content: ChangeEvent<HTMLInputElement>) => void;
}

export function InputAddTask({
    newContentTask = '',
    createNewTask,
    newTaskChange,
}: inputTaskProps) {
    return (
        <>
            <form className={styles.inputContainer}>
                <input
                    className={styles.inputText}
                    type="text"
                    value={newContentTask}
                    placeholder="Adicione uma nova tarefa"
                    onChange={(e) => newTaskChange(e)}
                />

                <button onClick={(e: any) => createNewTask(e)}>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </>
    );
}
