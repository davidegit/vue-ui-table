import flow from "lodash/fp/flow"

export function chain(values, ...partials) { return flow(...partials)(values) }

export function pipeline(values, ...partials) {
    const pipeline = [...partials]
    return {
        pipe(...otherPartials) { pipeline.push(...otherPartials) },
        run() { return chain(values, pipeline) }
    }
}