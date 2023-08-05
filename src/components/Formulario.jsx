import { useState } from 'react';

export const Formulario = () => {
    
    const [nombreMascota, setNombreMascota] = useState('');
    const [dueno, setNombreDueno] = useState('');
    const [email, setEmail] = useState('');
    const [Date, setDate] = useState('');
    const [Area, setArea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nombreMascota);
    } 
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            {/* Titulo de la seccion del formulario*/}
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            {/* descripcion de la seccion formulario*/}
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administrador</span>
            </p>
            {/* formulario */}
            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-blue-1000 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-blue-400 rounded-md"
                        value={nombreMascota}
                        onChange={ (e) => setNombreMascota(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-blue-1000 uppercase font-bold">
                        Nombre Dueño
                    </label>
                    <input
                        id="Dueño"
                        type="text"
                        placeholder="Dueño"
                        className="border-2 w-full p-2 mt-2 placeholder-blue-400 rounded-md"
                        value={dueno}
                        onChange={ (e) => setNombreDueno(e.target.value) }
                    />  


                <div className="mb-5">
                    <label htmlFor="Email" className="block text-blue-1000 uppercase font-bold">
                        Email
                    </label>

                    <input
                        type="Email"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-blue-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-blue-1000 uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="mascota"
                        type="Date"
                        placeholder="Date"
                        className="border-2 w-full p-2 mt-2 placeholder text-blue-400 rounded-md"
                        value={Date}
                        onChange={ (e) => setDate(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-blue-1000 uppercase font-bold">
                        Sintomas perro
                    </label>
                    <textarea  className="block text-gray-700 uppercase font-bold border-2 w-full p-2 mt-2 " ></textarea>
                </div>

                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={  'Agregar Paciente' }
                />
            </form>
        </div>
    );
  };