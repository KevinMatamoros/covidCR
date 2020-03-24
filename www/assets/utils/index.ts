import { element } from '../../../node_modules/protractor';

export * from './theme';



export function sortCasesSection(array) {
    let correctSort = ['Casos Confirmados', 'Casos Descartados', 'Fallecidos', 'Recuperados', 'Ticos', 'Extranjeros'];

    array.forEach(element => {
        switch (element.name) {
            case 'Casos Confirmados':
                correctSort[0] = element;
                break;
            case 'Casos Descartados':
                correctSort[1] = element;

                break;
            case 'Fallecidos':
                correctSort[2] = element;

                break;
            case 'Recuperados':
                correctSort[3] = element;
                break;
            case 'Ticos':
                correctSort[4] = element;

                break;
            case 'Extranjeros':
                correctSort[5] = element;

                break;
        }
    });
    return correctSort;
};

function findProvince(array, province) {
    return array.find((element) => { return element.province === province.province });
}
function calSum(array){
    let sum = 0;
    array.forEach(element => {
        sum+=element[1];
    });
    return sum;
}

export function sortCasesProvince(array) {
    let seriesData = [];

    array.forEach(element => {
        let province = findProvince(seriesData, element);
        if (province) {
            province.drilldown.data.push([element.region, element.number]);
        }
        else {
            element['drilldown'] = {
                name: element.province,
                id: element.province,
                data: []
            }
            element.drilldown.data.push([element.region, element.number]);
            seriesData.push(element);

        }
    });
    let drilldown = [...seriesData.map((element) => element.drilldown)];
    seriesData.forEach((element) => {
        element.name = element.province;
        element.y = calSum(element.drilldown.data);
        element.drilldown = element.province;

    });
    
    return {
        'drilldown': drilldown,
        'series': seriesData
    }
};

export function sortCasesAge(array) {
    let correctSort = ['Menores de Edad', 'Adultos', 'Adultos Mayores'];

    array.forEach(element => {
        switch (element.age) {
            case 'Menores de Edad':
                correctSort[0] = element;
                break;
            case 'Adultos':
                correctSort[1] = element;

                break;
            case 'Adultos Mayores':
                correctSort[2] = element;

                break;
        }
    });
    return correctSort;
};