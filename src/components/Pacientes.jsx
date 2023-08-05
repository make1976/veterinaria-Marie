import React from 'react'

export const Pacientes = () => {
    return (
        <>
            <div className="md:w-1/2 lg:w-2/5 mx-5">
                <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                <p className="text-lg mt-5 text-center mb-10">
                    Comienza agregando pacientes{''}
                    <span className="text-indigo-600 font-bold ">y apareceran en este lugar</span>
                </p>
            </div>
        </>
    )
}