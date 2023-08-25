import { useRef } from 'react';

export const Formulario = () => {

    //Inicializamos nuestra referencia usando el hook useRef
    const form = useRef(null)

    //sendData se mantendra como nuestra funcion que simula mandar data
    const sendData = (object, ) => {
        console.log(object)
    }

    //Nuestro handleSubmit hace toda la magia
    const handleSubmit = () => {
        //e.preventDefault()
        //Instanciamos a la clase FormData con el nodo de form para acceder
        //a los valores de los input
        const formData = new FormData(form.current);
        //Creamos un objeto que va a guardar los valores
        //que a su vez obtenemos mediante el FormData
        const registroPaciente = {
            nombreMascota: formData.get('nombreMascota'),
            nombreDueno: formData.get("nombreDueno"),
            email: formData.get("email"),
            fechaAlta: formData.get("fechaAlta"),
            sintomasMascota: formData.get("sintomasMascota"),
        }

        //Aqui es donde simulamos mandar nuestra data
        sendData(
            registroPaciente
        )
        //limpiar campos reto  
        form.current.reset();
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
            {/*
             Es importante que nuestra referenciaeste dentro el nodo de form
             para asi poder acceder a los valores con el handleSubmit
            */}
            <form
                ref={form}
                // onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-blue-1000 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        required
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        name="nombreMascota" //Agregamos este tributo
                        className="border-2 w-full p-2 mt-2 placeholder-blue-400 rounded-md"

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-blue-1000 uppercase font-bold">
                        Nombre Dueño
                    </label>
                    <input
                        required
                        id="dueno"
                        type="text"
                        placeholder="Dueño"
                        className="border-2 w-full p-2 mt-2 placeholder-blue-400 rounded-md"
                        name="nombreDueno"
                    />
                </div>


                <div className="mb-5">
                    <label htmlFor="Email" className="block text-blue-1000 uppercase font-bold">
                        Email
                    </label>

                    <input
                        required
                        type="Email"
                        placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-blue-400 rounded-md"
                        name="email"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-blue-1000 uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        required
                        id="mascota"
                        type="Date"
                        placeholder="Date"
                        className="border-2 w-full p-2 mt-2 placeholder text-blue-400 rounded-md"
                        name="fechaAlta"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-blue-1000 uppercase font-bold">
                        Sintomas Mascota
                    </label>
                    <textarea
                        required
                        className="block text-gray-700 uppercase font-bold border-2 w-full p-2 mt-2 "
                        name="sintomasMascota"
                    ></textarea>


                </div>
                <button
                    type="button"
                    onClick={handleSubmit} //Agregamos la funcion en el input buton usando el evento onClick
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                >

                    Agregar Paciente

                </button>
            </form>
        </div>
    );
}