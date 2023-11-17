function FormField({ label, type, placeholder }) {
  return (
    <form>
      <div class="field">
        <label class="label">{label}</label>
        <div class="control">
          <input class="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    </form>
  );
}

export default FormField;
