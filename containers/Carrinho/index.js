import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

import ListaDeProdutos from './ListaDeProdutos';
import DadosDoCarrinho from './DadosDoCarrinho';

class CarrinhoContainer extends Component {

    componentDidMount() {
        this.props.setCarrinho();
    }

    componentDidUpdate(prevProps) {
        const { carrinho } = this.props;
        if (carrinho && carrinho[0] &&
            carrinho[0].produto && !carrinho[0].produto._id) {
            carrinho.forEach((item, idx) => {
                this.props.fetchProdutoCarrinho(item.produto, idx);
                this.props.fetchVariacoesCarrinho(item.variacao, item.produto, idx);
            });
        }
    }

    render() {
        return (
            <div className="container Carrinho">

                <div className="flex flex-2">
                    <div className="flex-1">
                    <h3>Detalhes do pedido</h3>
                    </div>
                    <div className="flex flex-right">
                        <Link href="/">
                            <button className="btn btn-success ">
                              <span className="btn-cc"> Continuar comprando? </span>
                            </button>
                        </Link>
                    </div>
                </div>

                <ListaDeProdutos />
                <DadosDoCarrinho />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carrinho: state.carrinho.carrinho
});


export default connect(mapStateToProps, actions)(CarrinhoContainer);