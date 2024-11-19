const { execSync } = require('child_process')
const { readdirSync, readFileSync } = require('fs')
const { error, success } = require('consola')

const { _: apps } = require('minimist')(process.argv.slice(2))

if (!apps.length) {
    execSync('pnpm -r --parallel run dev', { stdio: 'inherit' })
} else {
    const packagesFolder = `${process.cwd()}/packages`
    const validAppNames = readdirSync(packagesFolder)
        .filter(folder => folder.startsWith('app-'))
        .map(folder => {
            const packageJson = JSON.parse(
                readFileSync(`${packagesFolder}/${folder}/package.json`).toString(),
            )
            return packageJson.name.replace('@app/', '')
        })
    const isArgsValid = apps.every(app => validAppNames.includes(app))
    if (!isArgsValid) {
        error(`合法的子应用名字：${validAppNames.join('、')}`)
        return
    }
    // 基座服务必须启动
    if (!apps.includes('base')) {
        apps.push(`base`)
    }
    success(`${apps.join('、')}服务即将启动`)
    const filter = apps.map(item => `-F @app/${item}`).join(' ')
    execSync(`pnpm --parallel ${filter} run dev`, { stdio: 'inherit' })
}
