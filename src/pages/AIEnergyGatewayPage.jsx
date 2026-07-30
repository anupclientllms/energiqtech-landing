import "../styles/AIEnergyGatewayPage.css";
import { Link } from "react-router-dom";
import {
  Activity,
  BatteryCharging,
  Brain,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Gauge,
  GitBranch,
  LineChart,
  Lock,
  PlugZap,
  RadioTower,
  Server,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";

export default function AIEnergyGatewayPage() {
  return (
    <main className="gatewayPage">
      <section className="gatewayHero">
        <div className="gatewayHeroText">
          <p className="gatewayEyebrow">AI Energy Gateway</p>

          <h1>The intelligent edge connecting buildings, DER and AI decision intelligence.</h1>

          <p>
            The AI Energy Gateway securely connects Building Management Systems,
            Solar PV, Battery Energy Storage Systems, EV Charging, Smart Meters,
            IoT Sensors and Utility Interfaces into a common AI operational layer.
          </p>

          <div className="gatewayHeroActions">
            <Link to="/pilot-program" className="gatewayPrimary">
              Explore Pilot Program <ChevronRight size={18} />
            </Link>

            <Link to="/connected-energy-assets" className="gatewaySecondary">
              Connected Energy Assets
            </Link>
          </div>
        </div>

        <div className="gatewayHeroVisual">
          <div className="gatewayCore">
            <Cpu />
            <strong>AI Energy Gateway</strong>
            <span>Edge AI • Secure Integration • Operational Intelligence</span>
          </div>

          <div className="gatewayNode node1"><Sun />Solar PV</div>
          <div className="gatewayNode node2"><BatteryCharging />Battery Storage</div>
          <div className="gatewayNode node3"><PlugZap />EV Charging</div>
          <div className="gatewayNode node4"><Building2 />BMS</div>
          <div className="gatewayNode node5"><Gauge />Smart Meters</div>
          <div className="gatewayNode node6"><Activity />IoT Sensors</div>
        </div>
      </section>

      <section className="gatewaySection">
        <div className="gatewaySectionHeader">
          <p>Why the gateway matters</p>
          <h2>Energy systems need a common operational intelligence layer.</h2>
          <span>
            Buildings, solar, batteries, EV chargers and meters often operate as
            separate systems. The AI Energy Gateway provides a secure, vendor-neutral
            integration layer that turns fragmented telemetry into AI-ready operational data.
          </span>
        </div>

        <div className="gatewayGrid">
          <div><ShieldCheck /><strong>Secure edge connectivity</strong><span>Connect operational systems through a controlled gateway layer.</span></div>
          <div><GitBranch /><strong>Vendor-neutral integration</strong><span>Designed to work across existing and future energy infrastructure.</span></div>
          <div><Brain /><strong>AI-ready data</strong><span>Normalise telemetry for AI Decision Agents, Digital Twins and savings intelligence.</span></div>
          <div><LineChart /><strong>Real-time visibility</strong><span>Support faster operational insight across buildings and connected assets.</span></div>
        </div>
      </section>

      <section className="gatewayDark">
        <div className="gatewaySectionHeader dark">
          <p>How it works</p>
          <h2>Connect. Normalise. Analyse. Recommend. Approve. Execute.</h2>
        </div>

        <div className="gatewaySteps">
          {[
            ["1", "Connect assets", "BMS, Solar PV, BESS, EV chargers, meters, IoT and utility data."],
            ["2", "Normalise telemetry", "Convert fragmented data into a common operational model."],
            ["3", "AI intelligence", "Decision Agents analyse context, forecasts and asset behaviour."],
            ["4", "Recommend actions", "Generate explainable optimisation actions with estimated impact."],
            ["5", "Human approval", "Operators review actions before operational execution."],
            ["6", "Execute & learn", "Approved actions are tracked, measured and used to improve decisions."],
          ].map(([num, title, text]) => (
            <div className="gatewayStep" key={title}>
              <b>{num}</b>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="gatewaySection">
        <div className="gatewaySectionHeader">
          <p>Universal asset connectivity</p>
          <h2>One gateway. Multiple energy systems.</h2>
          <span>
            The AI Energy Gateway is designed as the integration point between
            connected assets and EnerG IQ Tech’s AI platform.
          </span>
        </div>

        <div className="gatewayAssetMap">
          <div><Building2 /><span>Building Management Systems</span></div>
          <div><Sun /><span>Solar PV</span></div>
          <div><BatteryCharging /><span>Battery Storage</span></div>
          <div><PlugZap /><span>EV Charging</span></div>
          <div><Gauge /><span>Smart Meters</span></div>
          <div><Activity /><span>IoT Sensors</span></div>
          <div><RadioTower /><span>Utility Interfaces</span></div>
        </div>

        <div className="gatewayPipeline">
          <span>Connected Assets</span>
          <ChevronRight />
          <span>AI Energy Gateway</span>
          <ChevronRight />
          <span>AI Decision Agents</span>
          <ChevronRight />
          <span>Digital Twin</span>
          <ChevronRight />
          <span>Operational Action</span>
        </div>
      </section>

      <section className="gatewayInteroperability">
        <div className="gatewaySectionHeader">
          <p>Open Integration Architecture</p>
          <h2>Designed for building, DER and enterprise interoperability.</h2>
          <span>
            The AI Energy Gateway is designed to connect operational building systems,
            Distributed Energy Resources and enterprise platforms through open,
            vendor-neutral integration pathways.
          </span>
        </div>

        <div className="protocolGroupGrid">
          <div>
            <h3>Building Systems</h3>
            <span>BACnet</span>
            <span>Modbus</span>
            <span>OPC-UA</span>
            <span>MQTT</span>
          </div>

          <div>
            <h3>Enterprise APIs</h3>
            <span>REST APIs</span>
            <span>HTTPS</span>
            <span>WebSockets</span>
            <span>OAuth 2.0</span>
          </div>

          <div>
            <h3>DER & Energy</h3>
            <span>IEC 61850</span>
            <span>IEEE 2030.5</span>
            <span>OpenADR</span>
            <span>OCPP</span>
            <span>SunSpec</span>
            <span>DER APIs</span>
          </div>
        </div>
      </section>

      <section className="gatewaySection">
        <div className="gatewaySectionHeader">
          <p>Future grid integration pathways</p>
          <h2>Designed to support demand response and future market participation.</h2>
          <span>
            The gateway architecture is designed to support future integration with
            tariffs, demand response programs, DNSP signals, aggregators, AEMO-related
            forecasts and Virtual Power Plant readiness as customer deployments evolve.
          </span>
        </div>

        <div className="gatewayFutureGrid">
          <div><Server /><strong>Retailers</strong></div>
          <div><GitBranch /><strong>Aggregators</strong></div>
          <div className="active"><Zap /><strong>AI Energy Gateway</strong></div>
          <div><RadioTower /><strong>DNSPs</strong></div>
          <div><LineChart /><strong>AEMO Forecasts</strong></div>
        </div>
      </section>

      <section className="gatewayProof">
        <div>
          <p>What this enables</p>
          <h2>The foundation for connected, AI-assisted energy operations.</h2>
          <span>
            The AI Energy Gateway allows organisations to begin with practical building
            optimisation while creating a pathway toward connected DER coordination,
            flexible load management and future grid services.
          </span>
        </div>

        <ul>
          <li><CheckCircle2 /> Secure operational data exchange</li>
          <li><CheckCircle2 /> Interoperable asset connectivity</li>
          <li><CheckCircle2 /> AI Decision Agent workflows</li>
          <li><CheckCircle2 /> Human-in-the-loop operational control</li>
          <li><CheckCircle2 /> Future demand response and grid integration pathways</li>
        </ul>
      </section>

      <section className="gatewayCTA">
        <h2>Ready to connect your energy ecosystem?</h2>
        <p>
          Start with a pilot discussion to review your buildings, connected assets,
          operational data and AI Energy Gateway deployment pathway.
        </p>

        <Link to="/pilot-program" className="gatewayPrimary">
          Explore Pilot Program <ChevronRight size={18} />
        </Link>
      </section>
    </main>
  );
}