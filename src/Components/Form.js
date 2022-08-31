import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-solid-svg-icons'
import '../form.css'
import { useForm } from 'react-hook-form'

const Form = () => {
    const {register, handleSubmit, formState: {errors}, watch } = useForm()
    const onSubmit = data => console.log(data)

    const checkForm = watch('checkForm');

    return (
        <div>
            <div className='form-check'>
                <label htmlFor="form-check">Form</label>
                <input type="checkbox" id="form-check" {...register('checkForm')} />
            </div>
        {checkForm && (
             <div className='form'>
           
             <form onSubmit={handleSubmit(onSubmit)} className="form-content">
                 
                 <div className='form-field'>
                      <FontAwesomeIcon icon={faUser}/>
                      <input class="form-input" type="number" placeholder='Numero de identificación' {...register("id", {required: true})} />
                      {errors.id?.type === 'required' && 'Este campo no puede quedar vacio'}
                 </div>
                 
                 {/* <p>Informacion Personal</p> */}
                 <div className='form-field'>
                      <FontAwesomeIcon icon={faUser}/>
                      <input class="form-input" type="text" placeholder='Nombre' {...register("name", {required: true})} />
                      {errors.id?.type === 'required' && 'Este campo no puede quedar vacio'}
                 </div>
                 <div className='form-field'>
                      <FontAwesomeIcon icon={faUser}/>
                      <input class="form-input" type="email" placeholder='Correo' {...register("email", {required: true})} />
                      {errors.id?.type === 'required' && 'Este campo no puede quedar vacio'}
                 </div>
                 <div className='form-field'>
                      <FontAwesomeIcon icon={faUser}/>
                      <input class="form-input" type="text" placeholder='Numero de celular' {...register("number", {required: true})} />
                      {errors.id?.type === 'required' && 'Este campo no puede quedar vacio'}
                 </div>
                 <div className='form-field'>
                      <FontAwesomeIcon icon={faUser}/>
                      <input class="form-input" type="text" placeholder='Descripcion personal' {...register("description", {required: false})} />
                      {errors.id?.type === 'required' && 'Este campo no puede quedar vacio'}
                 </div>
                 <div className='form-field'>
                      <FontAwesomeIcon icon={faUser}/>
                      <input class="form-input" type="text" placeholder='Experiencia Laboral' {...register("experience", {required: true})} />
                      {errors.id?.type === 'required' && 'Este campo no puede quedar vacio'}
                 </div>
                 <div className='form-field'>
                      <FontAwesomeIcon icon={faUser}/>
                      <select>
                              <option value="primaria">Primaria</option>
                              <option value="bachiller">Bachiller</option>
                              <option value="tecnico">Tecnico Profesional</option>
                              <option value="tecnologico">Tecnologico</option>
                              <option value="profesional">Profesional</option>
                              <option value="especializacion">Especialización</option>
                              <option value="maestria">Maestria</option>
                              <option value="doctorado">Doctorado</option>
                      </select>
                 </div>
                 <div className='form-field'>
                      <FontAwesomeIcon icon={faUser}/>
                      <input class="form-input" type="file" placeholder='id' {...register("id", {required: true})} />
                      {errors.id?.type === 'required' && 'Este campo no puede quedar vacio'}
                 </div>
  
                 <input type="button" value='Enviar' />
                 
             </form>
          </div> 
        )}
       
        </div>
    )
}

export default Form