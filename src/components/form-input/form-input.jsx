// import './form-input.scss'

const FormInput = ({ label, className, ...otherProps }) => {
    return (<>
        <div className="relative my-11 group">
            <input
                className={`${className} peer block w-full border-b border-gray-500 bg-white py-2.5 pr-2.5 pl-1.5 text-lg text-gray-500 focus:outline-none focus:border-black
                        ${otherProps.type === 'password' ? 'tracking-[0.3em]' : ''}
                        ${otherProps.value && String(otherProps.value).length ? 'bg-slate-200 ' : ''}`}
                placeholder=" " // Required for the peer-placeholder-shown logic
                {...otherProps}
            />
            {label && (
                <label
                    className=' absolute left-1.5 -top-5 text-sm text-gray-500 
                                transition-all duration-300 pointer-events-none
                                peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
                                peer-placeholder-shown:text-gray-500 peer-focus:-top-5
                                peer-focus:text-sm peer-focus:text-black
            '>
                    {label}
                </label>
            )}
        </div>
    </>
    )
}

export default FormInput