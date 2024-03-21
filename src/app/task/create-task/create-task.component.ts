import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit {
  tasks = [
    // Primeira instância com 5 elementos
    new Task("Tarefa 1", "Descrição da Tarefa 1", "em andamento"),
    new Task("Tarefa 2", "Descrição da Tarefa 2", "em andamento"),
    new Task("Tarefa 3", "Descrição da Tarefa 3", "em andamento"),
    new Task("Tarefa 4", "Descrição da Tarefa 4", "em andamento"),
    new Task("Tarefa 5", "Descrição da Tarefa 5", "em andamento"),

    // Segunda instância com 10 elementos
    new Task("Tarefa 6", "Descrição da Tarefa 6", "nao iniciado"),
    new Task("Tarefa 7", "Descrição da Tarefa 7", "nao iniciado"),
    new Task("Tarefa 8", "Descrição da Tarefa 8", "nao iniciado"),
    new Task("Tarefa 9", "Descrição da Tarefa 9", "nao iniciado"),
    new Task("Tarefa 11", "Descrição da Tarefa 10", "nao iniciado"),
    new Task("Tarefa 13", "Descrição da Tarefa 10", "nao iniciado"),
    new Task("Tarefa 10", "Descrição da Tarefa 10", "nao iniciado"),
    new Task("Tarefa 10", "Descrição da Tarefa 10", "nao iniciado"),

    // Terceira instância com 3 elementos
    new Task("Tarefa 11", "Descrição da Tarefa 11", "finalizada"),
    new Task("Tarefa 12", "Descrição da Tarefa 12", "finalizada"),
    new Task("Tarefa 13", "Descrição da Tarefa 13", "finalizada")
  ];

  ngOnInit(): void {

  }

  public getTaskBySituacao(situacao: string): Array<Task> {
    return this.tasks.filter(task => task.situacao === situacao)
  }
}


class Task {
  nome: string = '';
  descricao: string = '';
  situacao: string = '';

  constructor(nome: string, descricao: string, situacao: string) {
    this.nome = nome;
    this.descricao = descricao;
    this.situacao = situacao;
  }
}
