const escalas = {
  "Carrinho 01": {
    "Segunda": [
      { hora: "06:30 → 08:30", dupla: "Edson A. & Marlene" },
      { hora: "08:30 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Terça": [
      { hora: "06:00 → 08:00", dupla: "vago" },
      { hora: "08:00 → 10:00", dupla: "Carla & Patrícia" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Quarta": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "Madelaine & Frida" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Quinta": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Sexta": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 19:00", dupla: "Rosilda & Luciana & Sônia" },
      { hora: "19:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Sábado": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "Aline & Carla" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ]
  },
  "Carrinho 02": {
    "Segunda": [
      { hora: "07:00 → 09:00", dupla: "Marcio N. & Patrícia" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 17:30", dupla: "vago" },
      { hora: "17:30 → 19:30", dupla: "Edson A. & Marlene" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Terça": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Quarta": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Quinta": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 19:00", dupla: "vago" },
      { hora: "19:00 → 22:00", dupla: "Julio & Vanessa" }
    ],
    "Sexta": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Sábado": [
      { hora: "08:00 → 10:00", dupla: "Odileia & Paola" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ]
  },
  "Carrinho 03": {
    "Segunda": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Terça": [
      { hora: "07:00 → 09:00", dupla: "vago" },
      { hora: "09:00 → 11:00", dupla: "Ivana & Medlyn" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Quarta": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "Jenny & Patrícia" },
      { hora: "16:00 → 18:00", dupla: "Débora & Paula" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Quinta": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 19:00", dupla: "vago" },
      { hora: "19:00 → 22:00", dupla: "Anderson & Ivana" }
    ],
    "Sexta": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "vago" },
      { hora: "16:00 → 18:00", dupla: "Arcanjo & Jenny" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ],
    "Sábado": [
      { hora: "08:00 → 10:00", dupla: "vago" },
      { hora: "10:00 → 12:00", dupla: "vago" },
      { hora: "12:00 → 14:00", dupla: "vago" },
      { hora: "14:00 → 16:00", dupla: "Cleidimara & Eliane" },
      { hora: "16:00 → 18:00", dupla: "vago" },
      { hora: "18:00 → 20:00", dupla: "vago" },
      { hora: "20:00 → 22:00", dupla: "vago" }
    ]
  }
};
