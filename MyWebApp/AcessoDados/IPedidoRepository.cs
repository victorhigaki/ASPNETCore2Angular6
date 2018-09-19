using System.Collections.Generic;
using MyWebApp.Entidades;

namespace MyWebApp.AcessoDados
{
    public interface IPedidoRepository
    {

        List<Pedido> ListarPedidos();

        void Salvar(Pedido pedido);

    }
}