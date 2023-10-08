import { cleanData } from './clean_data';

export async function getDynamicData() {
    const consumptionUrl = "https://api.openvolt.com/v1/interval-data?meter_id=6514167223e3d1424bf82742&granularity=hh&start_date=2023-01-01&end_date=2023-02-01"
    const apiKey = "test-Z9EB05N-07FMA5B-PYFEE46-X4ECYAR"
    const intensityUrl = "https://api.carbonintensity.org.uk/intensity/2023-01-01T00:01Z/2023-02-01T00:00Z";
    const generationUrl = "https://api.carbonintensity.org.uk/generation/2023-01-01T00:01Z/2023-02-01T00:00Z"

    const responses = await Promise.all([
        fetch(consumptionUrl, {headers: {"x-api-key": apiKey}}),
        fetch(intensityUrl), 
        fetch(generationUrl)
    ])
    const consumption = await responses[0].json()
    const intensity = await responses[1].json()
    const generation = await responses[2].json()

    return cleanData(
        consumption.data,
        generation.data,
        intensity.data
        );
}