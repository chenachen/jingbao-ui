// 通过 loadEnv 导出的环境变量为 Record<string, string>，这里用于转换成类型更准确的值
import { join } from 'node:path'

export function convertViteEnv(envRecord: Record<string, string>): ImportMetaEnv {
    // eslint-disable-next-line
    const env: any = {}

    for (const key of Object.keys(envRecord)) {
        // eslint-disable-next-line
        let value: any = envRecord[key].replace(/\\n/g, '\n')

        if (['true', 'false'].includes(value)) {
            value = value === 'true'
        } else if (!Number.isNaN(Number(value))) {
            value = Number(value)
        }

        env[key] = value
    }
    return env
}

const ROOT_PATH = join(__dirname, '..', '..')

export function getPathBaseRoot(path: string) {
    return join(ROOT_PATH, path)
}
