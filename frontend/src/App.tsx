import { useEffect, useState } from 'react'
import './App.css'
import { Table } from './components/table/Table'
import { TaskModal } from './components/ui/TaskModal'
import { taskService } from './services/taskService'
import type { RowProps } from './components/table/TableRow'

function App() {
  const [tableData, setTableData] = useState<RowProps[]>([])
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'create' | 'edit' | 'view'>('create')
  const [selectedTask, setSelectedTask] = useState<RowProps | null>(null)

  const getTasks = async () => {
    try {
      const listaDeTarefas = await taskService.carregarTarefas()
      setTableData(listaDeTarefas)
    } catch (error) {
      console.log('Falha ao carregar tarefas:', error)
    }
  }

  const deleteTask = async (id: number) => {
    if (confirm('Tem certeza que deseja deletar esta tarefa?')) {
      try {
        await taskService.excluirTarefa(id)
        getTasks()
      } catch (error) {
        console.error('Erro ao deletar tarefa:', error)
      }
    }
  }

  const openViewModal = (id: number) => {
    const taskToView = tableData.find(task => task.id === id);
    if (taskToView) {
      setSelectedTask(taskToView);
      setModalMode('view');
      setIsTaskModalOpen(true);
    }
  };

  useEffect(() => {
    getTasks()
  }, [])

  const openCreateModal = () => {
    setSelectedTask(null)
    setModalMode('create')
    setIsTaskModalOpen(true)
  }

  const openEditModal = (task: RowProps) => {
    setSelectedTask(task)
    setModalMode('edit')
    setIsTaskModalOpen(true)
  }

  const closeModal = () => {
    setSelectedTask(null)
    setIsTaskModalOpen(false)
  }

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-6">
      <h1 className="text-5xl">Gerenciamento de tarefas</h1>

      {isTaskModalOpen && (
        <TaskModal
          mode={modalMode}
          task={selectedTask}
          closeModal={closeModal}
          tableUpdate={getTasks}
        />
      )}

      <Table
        data={tableData}
        createModal={openCreateModal}
        onEditTask={openEditModal}
        onDeleteTask={deleteTask}
        onViewTask={openViewModal}
      />
    </div>
  )
}

export default App
