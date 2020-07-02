const IN_BROWSER = typeof window !== 'undefined'
const IS_PROD = process.env.NODE_ENV === 'production'
const IS_DEBUG = process.env.DEBUG === 'true'
const EN_LOCALE_ONLY = process.env.EN_LOCALE_ONLY === 'true'

module.exports = {
  IN_BROWSER,
  IS_PROD,
  IS_DEBUG,
  EN_LOCALE_ONLY,
}
