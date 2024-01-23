export let entry: string;
export let devtool: string;
export namespace module {
    let rules: {
        test: RegExp;
        use: string;
        exclude: RegExp;
    }[];
}
export namespace resolve {
    let extensions: string[];
}
export namespace output {
    let filename: string;
    let path: string;
}
export namespace devServer {
    export namespace _static {
        let directory: string;
    }
    export { _static as static };
    export let compress: boolean;
    export let port: number;
}
