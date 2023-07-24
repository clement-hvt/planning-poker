type InputProps = {
    label: string,
    placeholder: string,
}

export default function Input({label, placeholder}: InputProps) {
    return (
        <div>
            <label htmlFor="email" className="sr-only">{label}</label>

            <div className="relative">
                <input
                    type="email"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={placeholder}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4"></span>
            </div>
        </div>
    )
}