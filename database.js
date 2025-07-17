const db = {
    Users: [
        { UserID: 1, FullName: "林業務" },
        { UserID: 2, FullName: "陳經理" }
    ],
    Suppliers: [
        { SupplierID: 1, SupplierName: "環球肉品公司" },
        { SupplierID: 2, SupplierName: "頂級海鮮直送" }
    ],
    Buyers: [
        { BuyerID: 101, BuyerName: "A級牛排館" },
        { BuyerID: 102, BuyerName: "饗食天堂餐飲集團" }
    ],
    Production_Areas: [
        { AreaID: 8, AreaName: "澳洲" },
        { AreaID: 6, AreaName: "西班牙" }
    ],
    Supplier_Production_Numbers: [
        { ProdNumID: 1, ProductionNumber: "SIF 121" },
        { ProdNumID: 2, ProductionNumber: "ESP 456" }
    ],
    Sub_Brands: [
        { SubBrandID: 1, SubBrandName: "World's Best Beef" },
        { SubBrandID: 2, SubBrandName: "Iberico Gold" }
    ],
    Product_Categories: [
        { CategoryID: 1, PartName_ZH: "牛肉" },
        { CategoryID: 2, PartName_ZH: "豬肉" }
    ],
    Product_Parts: [
        { PartID: 1, PartName_ZH: "肋眼" },
        { PartID: 3, PartName_ZH: "梅花" }
    ],
    Product_Specs: [
        { SpecID: 1, SpecName_ZH: "M9" },
        { SpecID: 2, SpecName_ZH: "Bellota" }
    ],
    Product_Packagings: [
        { PackagingID: 2, PackagingName_ZH: "原塊" },
        { PackagingID: 4, PackagingName_ZH: "真空包裝" }
    ],
    Products: [
        { ProductID: 1, SupplierID: 1, CategoryID: 1, PartID: 1, SpecID: 1, PackagingID: 2, ProductDisplayName: "澳洲和牛M9肋眼", ProductCode: "AW-RB-G9-001", AreaID: 8, ProdNumID: 1, SubBrandID: 1 },
        { ProductID: 2, SupplierID: 1, CategoryID: 2, PartID: 3, SpecID: 2, PackagingID: 4, ProductDisplayName: "西班牙伊比利豬梅花", ProductCode: "SP-Pork-001", AreaID: 6, ProdNumID: 2, SubBrandID: 2 }
    ],
    Supplier_Quotes: [
        { SupplierQuoteID: 1, ProductID: 1, EffectiveTimestamp: "2025-05-20T00:00:00Z", SupplierOriginalPrice: 1800, InternalCostPrice: 1850 },
        { SupplierQuoteID: 2, ProductID: 1, EffectiveTimestamp: "2025-06-01T00:00:00Z", SupplierOriginalPrice: 1820, InternalCostPrice: 1870 },
        { SupplierQuoteID: 3, ProductID: 1, EffectiveTimestamp: "2025-06-10T00:00:00Z", SupplierOriginalPrice: 1810, InternalCostPrice: 1860 },
        { SupplierQuoteID: 4, ProductID: 2, EffectiveTimestamp: "2025-06-08T00:00:00Z", SupplierOriginalPrice: 805, InternalCostPrice: 855 }
    ],
    Quotes_To_Buyers: [
        { QuoteToBuyerID: 1, SupplierQuoteID: 3, ProductID: 1, BuyerID: 101, QuotedPrice: 2200, CustomerExpectedPrice: null, BID: null, QuoteTimestamp: "2025-06-11T10:00:00Z", Status: "Negotiating", QuotedCostPrice: 1860 },
        { QuoteToBuyerID: 2, SupplierQuoteID: 3, ProductID: 1, BuyerID: 101, QuotedPrice: null, CustomerExpectedPrice: 2150, BID: 2160, QuoteTimestamp: "2025-06-11T11:00:00Z", Status: "Negotiating", QuotedCostPrice: 1860 },
        { QuoteToBuyerID: 3, SupplierQuoteID: 3, ProductID: 1, BuyerID: 102, QuotedPrice: 2250, CustomerExpectedPrice: 2240, BID: 2240, QuoteTimestamp: "2025-06-12T09:30:00Z", Status: "Negotiating", QuotedCostPrice: 1860 },
        { QuoteToBuyerID: 10, SupplierQuoteID: 2, ProductID: 1, BuyerID: 101, QuotedPrice: 2280, CustomerExpectedPrice: 2260, BID: 2260, QuoteTimestamp: "2025-06-02T11:00:00Z", Status: "Ordered", FinalSellingPrice: 2260, FinalCostPrice: 1870, QuotedCostPrice: 1870 },
        { QuoteToBuyerID: 11, SupplierQuoteID: 1, ProductID: 1, BuyerID: 101, QuotedPrice: 2300, CustomerExpectedPrice: null, BID: null, QuoteTimestamp: "2025-05-21T10:00:00Z", Status: "Negotiating", QuotedCostPrice: 1850 },
        { QuoteToBuyerID: 12, SupplierQuoteID: 1, ProductID: 1, BuyerID: 101, QuotedPrice: 2280, CustomerExpectedPrice: 2270, BID: 2270, QuoteTimestamp: "2025-05-21T14:30:00Z", Status: "Negotiating", QuotedCostPrice: 1850 },
        { QuoteToBuyerID: 13, SupplierQuoteID: 1, ProductID: 1, BuyerID: 102, QuotedPrice: 2320, CustomerExpectedPrice: 2300, BID: 2300, QuoteTimestamp: "2025-05-22T09:00:00Z", Status: "Negotiating", QuotedCostPrice: 1850 }
    ],
    Orders: [
        { OrderID: 10, OrderNumber: "ORD-202506-010", BuyerID: 101, SystemCreatedAt: "2025-06-03T10:00:00Z" }
    ],
    Order_Line_Items: [
        { LineItemID: 10, OrderID: 10, QuoteToBuyerID: 10 }
    ],
    orderFinances: [
        {
            id: 10,
            orderNumber: "ORD-202506-010",
            buyerName: "A級牛排館",
            supplierName: "環球肉品公司",
            dealDate: "2025-06-03",
            totalWeight: "370.50 kg",
            totalCost: 571035,
            totalPrice: 684930,
            totalProfit: 113895,
            profitMargin: "16.63%"
        },
        {
            id: 11,
            orderNumber: "ORD-202505-003",
            buyerName: "饗食天堂餐飲集團",
            supplierName: "頂級海鮮直送",
            dealDate: "2025-05-15",
            totalWeight: "850.00 kg",
            totalCost: 750000,
            totalPrice: 920000,
            totalProfit: 170000,
            profitMargin: "18.48%"
        }
    ]
};