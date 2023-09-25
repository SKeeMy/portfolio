var API_BASE

if (process.env.NODE_ENV === "production") {
    API_BASE = `${process.env.REACT_APP_API_ADDR}:${process.env.REACT_APP_API_PORT}`
} else if (process.env.NODE_ENV === "development") {
    API_BASE = "http://localhost:6001"
}

export const API_ROOT = API_BASE + "/api/v1";

export const API_RSETS = API_ROOT + "/authorized/config/waf/rulesets"
export const API_HOSTS = API_ROOT + "/authorized/config/groxy/hosts"

export const API_AUTH = API_ROOT + "/anonymous/auth"
export const API_MON = API_ROOT + "/authorized/monitoring/events"