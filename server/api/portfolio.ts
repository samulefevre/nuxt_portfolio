import portfolio from '~/server/datas/portfolio.json'

export default defineEventHandler((event) => {
    return {
        ...portfolio
    }

})