import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { NgModule } from "@angular/core";
import { RouterModule, Router, Routes } from "@angular/router"; 
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';
import { RestritoComponent } from './restrito.component';

const restritoRoutes: Routes = [
    { 
        path: 'restrito', component: RestritoComponent, children: [
        { path: 'cadastro', component: CadastroProdutoComponent}, 
        {path: 'lista', component: ListaProdutoComponent}, 
        { path: 'editar/:id', component: AtualizarProdutoComponent}
    ]}, 
    {path: '', redirectTo: '/restrito/lista', pathMatch: 'full'}
]

@NgModule ({
    imports: [RouterModule.forChild(restritoRoutes)], 
    exports: [RouterModule]
})

export class RestritoRoutingModule {

}