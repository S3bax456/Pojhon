export interface Dish {
  nombre: string;
  descripcion?: string;
  imagen?: string;
  precio: string;
}

export interface Category {
  id: string;
  nombre: string;
  items: Dish[];
}

export const DEFAULT_MENU_DATA: Category[] = [
  {
    id: "pollo-a-la-brasa-solo",
    nombre: "Pollo a la Brasa (Solo)",
    items: [
      {
        nombre: "1/8 Pollo a la Brasa",
        descripcion: "Incluye papas fritas, ensalada y cremas.",
        precio: "S/ 9.00",
        imagen: "/pollo_1_8.jpg"
      },
      {
        nombre: "1/4 Pollo a la Brasa",
        descripcion: "Incluye papas fritas, ensalada y cremas.",
        precio: "S/ 11.00",
        imagen: "/pollo_1_4.jpg"
      }
    ]
  },
  {
    id: "combos-a-la-brasa",
    nombre: "Combos a la Brasa",
    items: [
      {
        nombre: "Combo 1 (1/8 de Pollo)",
        descripcion: "1/8 de Pollo a la brasa + papas fritas + ensalada + cremas + Gaseosa 600 ml.",
        precio: "S/ 12.00",
        imagen: "/combo_1.png"
      },
      {
        nombre: "Combo 2 (1/4 de Pollo)",
        descripcion: "1/4 de Pollo a la brasa + papas fritas + ensalada + cremas + Gaseosa 600 ml.",
        precio: "S/ 14.00",
        imagen: "/combo_2.png"
      },
      {
        nombre: "Combo 5 (1/4 de Pollo + Chaufa)",
        descripcion: "1/4 de Pollo a la brasa + papas fritas + ensalada + cremas + Arroz Chaufa + Gaseosa 600 ml.",
        precio: "S/ 16.00",
        imagen: "/combo_5.jpg"
      },
      {
        nombre: "Combo 4 (1/2 Pollo)",
        descripcion: "1/2 Pollo a la brasa + papas fritas + ensalada + cremas + Gaseosa 1 Litro.",
        precio: "S/ 28.00",
        imagen: "/combo_4.png"
      },
      {
        nombre: "Combo 3 (1/2 Pollo + Chaufa)",
        descripcion: "1/2 Pollo a la brasa + papas fritas + ensalada + cremas + Arroz Chaufa + Gaseosa 1 Litro.",
        precio: "S/ 38.00",
        imagen: "/combo_3.jpg"
      },
      {
        nombre: "Combo 7 (1 Pollo Entero)",
        descripcion: "1 Pollo entero a la brasa + papas fritas + ensalada + cremas + Gaseosa 1.5 Litros.",
        precio: "S/ 49.00",
        imagen: "/combo_7.jpg"
      },
      {
        nombre: "Combo 8 (1 Pollo Entero + Chaufa)",
        descripcion: "1 Pollo entero a la brasa + papas fritas + ensalada + cremas + Arroz Chaufa Familiar + Gaseosa 1.5 Litros.",
        precio: "S/ 60.00",
        imagen: "/combo_8.jpg"
      }
    ]
  },
  {
    id: "menu-del-dia",
    nombre: "Menú del Día (Sopa Wantan + Chicha)",
    items: [
      {
        nombre: "Tallarín Verde + 1/8 a la Brasa",
        descripcion: "Incluye entrada de sopa wantan y chicha de cortesía.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Tallarín Verde + Hígado Frito",
        descripcion: "Incluye entrada de sopa wantan y chicha de cortesía.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Tallarín Verde + Chuleta Frita",
        descripcion: "Incluye entrada de sopa wantan y chicha de cortesía.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Saltado de Pollo",
        descripcion: "Incluye entrada de sopa wantan y chicha de cortesía.",
        precio: "S/ 11.00",
        imagen: ""
      },
      {
        nombre: "Tallarín Saltado",
        descripcion: "Incluye entrada de sopa wantan y chicha de cortesía.",
        precio: "S/ 14.00",
        imagen: ""
      },
      {
        nombre: "Brócoli Saltado",
        descripcion: "Incluye entrada de sopa wantan y chicha de cortesía.",
        precio: "S/ 11.00",
        imagen: ""
      },
      {
        nombre: "Salchipapa",
        descripcion: "Incluye entrada de sopa wantan y chicha de cortesía.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "1/8 de Pollo a la Brasa",
        descripcion: "Incluye entrada de sopa wantan y chicha de cortesía.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Chuleta Frita con Papas",
        descripcion: "Incluye entrada de sopa wantan y chicha de cortesía.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Chaufa de Pollo",
        descripcion: "Incluye entrada de sopa wantan y chicha de cortesía.",
        precio: "S/ 10.00",
        imagen: ""
      }
    ]
  },
  {
    id: "chifa-chaufas",
    nombre: "Chifa - Chaufas",
    items: [
      {
        nombre: "Chaufa de Pollo",
        descripcion: "Arroz chaufa clásico salteado al wok con trozos de pollo.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Chaufa de Carne",
        descripcion: "Arroz chaufa salteado al wok con trozos de carne de res.",
        precio: "S/ 14.00",
        imagen: ""
      },
      {
        nombre: "Chaufa de Chancho",
        descripcion: "Arroz chaufa salteado al wok con trozos de cerdo.",
        precio: "S/ 14.00",
        imagen: ""
      },
      {
        nombre: "Chaufa de Cecina",
        descripcion: "Arroz chaufa salteado al wok con sabrosa cecina.",
        precio: "S/ 14.00",
        imagen: ""
      },
      {
        nombre: "Chaufa a lo Pobre",
        descripcion: "Arroz chaufa servido con huevo montado y plátano frito.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Chaufa con Tortilla",
        descripcion: "Arroz chaufa coronado con una jugosa tortilla.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Chaufa Especial",
        descripcion: "Arroz chaufa contundente con mezcla especial de carnes.",
        precio: "S/ 18.00",
        imagen: ""
      }
    ]
  },
  {
    id: "chifa-aeropuertos",
    nombre: "Chifa - Aeropuertos",
    items: [
      {
        nombre: "Aeropuerto de Pollo",
        descripcion: "Combinación oriental de chaufa y fideos con pollo.",
        precio: "S/ 12.00",
        imagen: ""
      },
      {
        nombre: "Aeropuerto de Carne",
        descripcion: "Combinación oriental de chaufa y fideos con carne de res.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Aeropuerto de Chancho",
        descripcion: "Combinación oriental de chaufa y fideos con carne de cerdo.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Aeropuerto Especial",
        descripcion: "Combinación oriental de chaufa y fideos con mezcla especial de carnes.",
        precio: "S/ 18.00",
        imagen: ""
      }
    ]
  },
  {
    id: "chifa-platos-especiales",
    nombre: "Chifa - Platos Especiales",
    items: [
      {
        nombre: "Combinado",
        descripcion: "Combinado clásico de chifa.",
        precio: "S/ 13.00",
        imagen: ""
      },
      {
        nombre: "Pollo con Verdura",
        descripcion: "Trozos de pollo salteados al wok con verduras orientales.",
        precio: "S/ 13.00",
        imagen: ""
      },
      {
        nombre: "Tallarín Chifa",
        descripcion: "Fideos salteados al wok con verduras y carnes.",
        precio: "S/ 14.00",
        imagen: ""
      },
      {
        nombre: "Salvaje",
        descripcion: "Plato especial contundente.",
        precio: "S/ 13.00",
        imagen: ""
      },
      {
        nombre: "Pollo Tipakay",
        descripcion: "Pollo en salsa dulce y agridulce oriental.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Pollo Limonkay",
        descripcion: "Pollo en salsa especial de limón.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Pollo Chijaukay",
        descripcion: "Pollo crocante bañado en salsa de ostión y mensi.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Sopa Wantan",
        descripcion: "Clásica sopa ligera con wantanes rellenos.",
        precio: "S/ 6.00",
        imagen: ""
      },
      {
        nombre: "Sopa Wantan Especial",
        descripcion: "Sopa wantan contundente con carnes y verduras adicionales.",
        precio: "S/ 10.00",
        imagen: ""
      }
    ]
  },
  {
    id: "brosteria",
    nombre: "Brostería",
    items: [
      {
        nombre: "Alita Broster",
        descripcion: "Alita de pollo empanizada y frita, crujiente por fuera.",
        precio: "S/ 9.00",
        imagen: ""
      },
      {
        nombre: "Pierna Broster",
        descripcion: "Pierna de pollo empanizada y frita, crujiente por fuera.",
        precio: "S/ 9.00",
        imagen: ""
      },
      {
        nombre: "Entrepierna Broster",
        descripcion: "Entrepierna de pollo empanizada y frita.",
        precio: "S/ 9.00",
        imagen: ""
      },
      {
        nombre: "Pecho Broster",
        descripcion: "Pecho de pollo empanizado y frito.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "1/4 Pierna Broster",
        descripcion: "Cuarto de pierna brosterizado, muy crujiente.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "1/4 Pecho Broster",
        descripcion: "Cuarto de pecho brosterizado, muy crujiente.",
        precio: "S/ 15.00",
        imagen: ""
      }
    ]
  },
  {
    id: "salchipapas",
    nombre: "Salchipapas (Mister Poffu)",
    items: [
      {
        nombre: "Salchipapa",
        descripcion: "Clásica combinación de hot dog y papas fritas.",
        precio: "S/ 8.00",
        imagen: ""
      },
      {
        nombre: "Salchorizo",
        descripcion: "Combinación de chorizo en rodajas y papas fritas.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Salchimixto",
        descripcion: "Mezcla de embutidos con abundantes papas fritas.",
        precio: "S/ 12.00",
        imagen: ""
      },
      {
        nombre: "Salchipollo",
        descripcion: "Trozos de pollo acompañados de hot dog y papas fritas.",
        precio: "S/ 12.00",
        imagen: ""
      },
      {
        nombre: "Salchichaufa",
        descripcion: "Irresistible combinación de salchipapa con arroz chaufa.",
        precio: "S/ 12.00",
        imagen: ""
      },
      {
        nombre: "Salchipapa a lo Pobre",
        descripcion: "Salchipapa coronada con huevo y plátano frito.",
        precio: "S/ 15.00",
        imagen: ""
      }
    ]
  },
  {
    id: "caldos-de-gallina",
    nombre: "Caldos de Gallina",
    items: [
      {
        nombre: "Caldo Solo",
        descripcion: "Caldo de gallina sin presa, con fideos y huevo.",
        precio: "S/ 8.00",
        imagen: ""
      },
      {
        nombre: "Caldo Presa Mediana",
        descripcion: "Sustancioso caldo de gallina con presa mediana.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Caldo Presa Grande",
        descripcion: "Sustancioso caldo de gallina con presa grande.",
        precio: "S/ 12.00",
        imagen: ""
      }
    ]
  },
  {
    id: "hamburguesas",
    nombre: "Hamburguesas",
    items: [
      {
        nombre: "Hamburguesa de Carne",
        descripcion: "Clásica hamburguesa de carne con papas fritas.",
        precio: "S/ 6.00",
        imagen: ""
      },
      {
        nombre: "Hamburguesa de Pollo",
        descripcion: "Hamburguesa de pollo con papas fritas.",
        precio: "S/ 6.00",
        imagen: ""
      },
      {
        nombre: "Hamburguesa Royal",
        descripcion: "Hamburguesa con huevo frito y papas fritas.",
        precio: "S/ 10.00",
        imagen: ""
      }
    ]
  },
  {
    id: "bebidas",
    nombre: "Bebidas",
    items: [
      {
        nombre: "Pepsi 300 ml",
        descripcion: "Gaseosa presentación personal pequeña.",
        precio: "S/ 2.00",
        imagen: ""
      },
      {
        nombre: "Pepsi 600 ml",
        descripcion: "Gaseosa presentación personal mediana.",
        precio: "S/ 2.50",
        imagen: ""
      },
      {
        nombre: "Pepsi 1 Litro",
        descripcion: "Gaseosa presentación de 1 Litro.",
        precio: "S/ 5.00",
        imagen: ""
      },
      {
        nombre: "Pepsi 1 1/2 Litros",
        descripcion: "Gaseosa presentación familiar.",
        precio: "S/ 6.00",
        imagen: ""
      },
      {
        nombre: "Pepsi 3 Litros",
        descripcion: "Gaseosa presentación gigante.",
        precio: "S/ 9.00",
        imagen: ""
      },
      {
        nombre: "Inca Kola 300 ml",
        descripcion: "Gaseosa presentación personal pequeña.",
        precio: "S/ 2.00",
        imagen: ""
      },
      {
        nombre: "Inca Kola 600 ml",
        descripcion: "Gaseosa presentación personal mediana.",
        precio: "S/ 4.00",
        imagen: ""
      },
      {
        nombre: "Inca Kola Gordita",
        descripcion: "Gaseosa presentación personal gordita.",
        precio: "S/ 5.00",
        imagen: ""
      },
      {
        nombre: "Inca Kola 1 Litro",
        descripcion: "Gaseosa presentación de 1 Litro.",
        precio: "S/ 7.00",
        imagen: ""
      },
      {
        nombre: "Inca Kola 1 1/2 Litros",
        descripcion: "Gaseosa presentación familiar.",
        precio: "S/ 9.00",
        imagen: ""
      },
      {
        nombre: "Inca Kola 3 Litros",
        descripcion: "Gaseosa presentación gigante.",
        precio: "S/ 15.00",
        imagen: ""
      },
      {
        nombre: "Agua Cielo",
        descripcion: "Botella de agua personal.",
        precio: "S/ 2.00",
        imagen: ""
      },
      {
        nombre: "KR Personal",
        descripcion: "Gaseosa KR formato personal.",
        precio: "S/ 2.00",
        imagen: ""
      }
    ]
  },
  {
    id: "bebidas-naturales",
    nombre: "Bebidas Naturales",
    items: [
      {
        nombre: "Chicha Morada (Vaso)",
        descripcion: "Vaso de refrescante chicha morada.",
        precio: "S/ 1.50",
        imagen: ""
      },
      {
        nombre: "Chicha Morada (1 Litro)",
        descripcion: "Jarra de chicha morada natural.",
        precio: "S/ 6.00",
        imagen: ""
      }
    ]
  },
  {
    id: "cervezas",
    nombre: "Cervezas",
    items: [
      {
        nombre: "Cerveza Pilsen",
        descripcion: "Cerveza rubia tradicional helada.",
        precio: "S/ 10.00",
        imagen: ""
      },
      {
        nombre: "Cerveza Cusqueña",
        descripcion: "Cerveza premium peruana.",
        precio: "S/ 12.00",
        imagen: ""
      },
      {
        nombre: "Cerveza Cristal",
        descripcion: "Cerveza rubia clásica helada.",
        precio: "S/ 10.00",
        imagen: ""
      }
    ]
  }
];
