// global scope
var Global = function() {
    this.scopes = {
        minmat: {}
    };
    return this;
};

// CourseDetail
var CourseDetail = [];
    
    record = {
        RecordID: null,
        CourseID: null,
        PrimaryYesNo: null,
        IngredientID: null,
        Quantity: null,
        MeasurmentID: null,
        CategoryID: null,
    };

// CourseMain
var CourseMain = [];
    
    course = {
        CourseID: null,
        Name: null,
        LongName: null,
        ImgPath: null,
        ImgOrg: null,
        ImgLarge: null,
        ImgMedium: null,
        ImgSmall: null,
        ImgThumb: null,
        Description: null,
    };

// Categories
var Categories = [];

// Ingrediens
var Ingredients = [];

// Measurments
var Measurments = [];

    measurment = {
        MeasurmentID: null,
        Name: null
    };