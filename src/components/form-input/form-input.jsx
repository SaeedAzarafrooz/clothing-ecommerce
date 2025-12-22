// import './form-input.scss'

const FormInput = ({ label, ...otherProps }) => {
    return (<>
        <div className="relative my-11 group">
            <input
                className={`peer block w-full border-b border-gray-500 bg-white py-2.5 pr-2.5 pl-1.5 my-6
                        text-lg text-gray-500 focus:outline-none focus:border-black
                        ${otherProps.type === 'password' ? 'tracking-[0.3em]' : ''}
                        ${otherProps.value && String(otherProps.value).length ? 'bg-slate-200 ' : ''}`}
                placeholder=" " // Required for the peer-placeholder-shown logic
                {...otherProps}
            />
            {label && (
                <label
                    className={`
            absolute left-1.5 top-2.5 transition-all duration-300 pointer-events-none text-gray-500 text-base
            peer-focus:-top-5 peer-focus:text-sm peer-focus:text-black
            ${console.log('otherProps:',otherProps) }
            ${otherProps.value && String(otherProps.value).length ? '-top-5 text-sm text-black ' : ''}`}>
                    {label}
                </label>
            )}
        </div>
    </>
    )
}

export default FormInput