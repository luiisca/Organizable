const Input = ({
  name, 
  type='text',
  errors=null, 
  register, 
  placeholder,
  validation,
}) => {
   return ( 
      <div>
        <label>{placeholder}</label>
        <input {...register(name, validation)} type={type} placeholder={placeholder}/>
        <span>{errors && errors.message}</span>
      </div>
   )
};

export default Input;
