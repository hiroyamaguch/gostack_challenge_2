module.exports = {
  presets: [
    '@babel/preset-env', // Transpila somente as funcionalidades que o node ainda não conhece
    '@babel/preset-react' // Transpila o html dentro do js para o browser
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};