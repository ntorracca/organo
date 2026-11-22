import './CampoTexto.css';

const CampoTexto =(props) => {

    const placeholderModificado = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificado} value={props.valor} onChange={aoDigitado} />
        </div>

    )
}

export default CampoTexto;