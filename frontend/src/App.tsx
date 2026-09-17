import { useEffect, useState } from 'react'
import './App.css'
import { Table } from './components/table/Table'
import { taskService } from './services/taskService'
import type { RowProps } from './components/table/TableRow'

function App() {


  const [tableData, setTableData] = useState<RowProps[]>([])

  useEffect(() => {
    const getTasks = async () => {
      try {
        const listaDeTarefas = await taskService.carregarTarefas()
        setTableData(listaDeTarefas)
      }
      catch (error) {
        console.log('Falha ao carregar tarefas:', error)
      }
    }
    getTasks()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-6">
      <h1 className="text-5xl">Gerenciamento de tarefas</h1>
      <Table data={tableData}></Table>
    </div>
  )
}

export default App
