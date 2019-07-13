
let exampleData = {
    id: 23542,
    title: "title",
    description: "description",
    full_name: "full_name",
    author: "author",
    guid: "f6ba502f-f70e-45c7-bd8d-6c9c47a2e06e",
    time: new Date(2011, 0, 1),
};


class NewFormatData {
    constructor(stringJSON){

        if(!stringJSON)
            throw new Error('Параметр отсутствует');

        let json = JSON.parse(stringJSON);
        this._data = {
            id: json.id,
            guid: json.guid,
            title: json.title,
        };
        this._meta = {
            description: json.description,
            full_name: json.full_name,
            author: json.author,
            time: json.time
        };

        this._error = null;
    };

    get getId(){
        if(this._data.id)
            return this._data.id;
        throw new Error('undefined ID');
    }

    //Не знаю допустимо ли в конкретной задаче undefined из геттера, поэтому поставил ошибку

    get getGuid(){
        if(this._data.guid)
            return this._data.guid;
        throw new Error('undefined Guid');
    }

    setter(property, value, type){
        if(!property || !value)
            throw new Error("Параметры указаны неверно");

        let dataProperty  = type === "data" ? ["id", "guid", "title"] : ["description", "full_name", "author", "time"];
        let propertyLowerCase = property.toLowerCase();

        if(dataProperty.find( (element) => element ===  propertyLowerCase)){
            this._meta[propertyLowerCase] = value;
            if(type === "data")
                this._data[propertyLowerCase] = value;
            else{
                this._meta[propertyLowerCase] = value;
            }
            console.log(propertyLowerCase + '=' + value);
        }
        else{
            throw new Error("Свойство не найдено");
        }
    }

    setProperty(property, value){
        this.setter(property, value, "data");
    }

    setMetaProperty(property, value){

        this.setter(property, value, "meta");
    }

    getter(property, type){
        if(!property)
            throw new Error("Параметры указаны неверно");

        let dataProperty = type === "data" ? ["id", "guid", "title"] : ["description", "full_name", "author", "time"];
        let propertyLowerCase = property.toLowerCase();

        if(dataProperty.find( (element) => element ===  propertyLowerCase)){
            return type === "data" ? this._data[propertyLowerCase] : this._meta[propertyLowerCase];
        }
        throw new Error("Свойство не найдено");
    }

    getProperty(property){
        return this.getter(property, "data");
    }

    getMetaProperty(metaProperty){
        return this.getter(metaProperty, "meta");
    }
}

function Transform(json){
    return new NewFormatData(json);
}

let test = Transform(JSON.stringify(exampleData));