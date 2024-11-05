type BaseProduct = {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number; 
  };
  
  type Electronics = BaseProduct & {
    category: 'electronics';
    brand: string;
    warrantyPeriod: number; 
    powerConsumption: string; 
  };
  
  type Clothing = BaseProduct & {
    category: 'clothing';
    size: string;
    material: string;
    gender: 'male' | 'female' | 'unisex';
  };
  
  const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
    return products.find(product => product.id === id);
  };
  
  const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number): T[] => {
    return products.filter(product => product.price <= maxPrice);
  };
  
  type CartItem<T> = {
    product: T;
    quantity: number;
  };
  
  const addToCart = <T extends BaseProduct>(
    cart: CartItem<T>[],
    product: T,
    quantity: number
  ): CartItem<T>[] => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }
    return cart;
  };
  
  const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };
  
  const electronics: Electronics[] = [
    {
      id: 1,
      name: "Телефон",
      price: 10000,
      description: "Смартфон з великим екраном і потужною батареєю",
      stock: 50,
      category: 'electronics',
      brand: "Samsung",
      warrantyPeriod: 24,
      powerConsumption: "15W"
    },
    {
      id: 2,
      name: "Ноутбук",
      price: 20000,
      description: "Потужний ноутбук для роботи та навчання",
      stock: 30,
      category: 'electronics',
      brand: "Dell",
      warrantyPeriod: 36,
      powerConsumption: "45W"
    }
  ];
  
  const clothing: Clothing[] = [
    {
      id: 3,
      name: "Футболка",
      price: 500,
      description: "Легка футболка з натуральної бавовни",
      stock: 100,
      category: 'clothing',
      size: "M",
      material: "Cotton",
      gender: "unisex"
    },
    {
      id: 4,
      name: "Джинси",
      price: 1500,
      description: "Класичні джинси для щоденного носіння",
      stock: 40,
      category: 'clothing',
      size: "L",
      material: "Denim",
      gender: "male"
    }
  ];
  
  const phone = findProduct(electronics, 1);
  console.log("Знайдений товар:", phone);
  
  const affordableElectronics = filterByPrice(electronics, 15000);
  console.log("Доступні товари до 15000:", affordableElectronics);
  
  let cart: CartItem<BaseProduct>[] = [];
  if (phone) cart = addToCart(cart, phone, 2); 
  const total = calculateTotal(cart); 
  
  console.log("Кошик:", cart);
  console.log("Загальна вартість:", total);
  