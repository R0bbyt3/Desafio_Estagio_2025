export const validateName = (name: string) => {
    if (name.trim().length < 2 || name.trim().length > 100) {
      return "O nome deve ter entre 2 e 100 caracteres.";
    }
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(name)) {
      return "O nome deve conter apenas letras e espaços.";
    }
    return "";
  };
  
  export const validateCompany = (company: string) => {
    if (company.trim().length < 2 || company.trim().length > 150) {
      return "A empresa deve ter entre 2 e 150 caracteres.";
    }
    if (/^\d+$/.test(company)) {
      return "A empresa não pode conter apenas números.";
    }
    return "";
  };
  
  export const validateCNPJ = (cnpj: string) => {
    const cleanedCNPJ = cnpj.replace(/\D/g, "");
    if (cleanedCNPJ.length !== 14) {
      return "O CNPJ deve conter 14 números.";
    }
    return "";
  };
  
  export const validatePhone = (phone: string) => {
    const cleanedPhone = phone.replace(/\D/g, "");
    if (cleanedPhone.length !== 10 && cleanedPhone.length !== 11) {
      return "O telefone deve ter 10 ou 11 dígitos";
    }
    return "";
  };
  
  export const validateEmail = (email: string) => {
    if (email.trim() === "") return "Digite algo no campo.";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return "E-mail inválido.";
    }
    return "";
  };
  
  export const validatePassword = (password: string) => {
    if (password.length < 8) return "A senha deve ter no mínimo 8 caracteres.";
    if (!/[A-Z]/.test(password)) return "A senha precisa de letra maiúscula.";
    if (!/[a-z]/.test(password)) return "A senha precisa de letra minúscula.";
    if (!/[0-9]/.test(password)) return "A senha precisa de número.";
    if (!/[@#$%^&+=*!]/.test(password)) return "A senha precisa de caractere especial.";
    if (/\s/.test(password)) return "A senha não pode conter espaços.";
    return "";
  };
  