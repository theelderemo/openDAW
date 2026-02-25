import css from "./Dashboard.sass?inline"
import {Lifecycle} from "@opendaw/lib-std"
import {createElement} from "@opendaw/lib-jsx"
import {StudioService} from "@/service/StudioService.ts"
import {Html} from "@opendaw/lib-dom"
import {Resources} from "@/ui/dashboard/Resources"
import {DemoProjects} from "@/ui/dashboard/DemoProjects"

const className = Html.adoptStyleSheet(css, "Dashboard")

type Construct = {
    lifecycle: Lifecycle
    service: StudioService
}

export const Dashboard = ({lifecycle, service}: Construct) => {
    return (
        <div className={className}>
            <article>
                <h1>Welcome to openDAW Studio</h1>
                <h2>Music creation inside your browser</h2>
                <p style={{margin: "0.5em 0 0 0"}}>
                    openDAW Studio is an open source web based music studio.
                </p>
                <div className="columns">
                    <DemoProjects lifecycle={lifecycle} service={service}/>
                    <Resources lifecycle={lifecycle} service={service}/>
                </div>
                <p style={{marginTop: "3em", fontSize: "11px", textAlign: "center"}}>
                    Visit <a
                    href="https://discord.com/invite/FQ6XGNf53P" target="discord">Discord</a>
                </p>
            </article>
        </div>
    )
}