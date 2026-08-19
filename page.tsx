import { ToolExperience } from "@/components/ToolExperience";
import type { ToolId } from "@/lib/tools";
export default async function Page({params}:{params:Promise<{tool:ToolId}>}){const {tool}=await params;return <ToolExperience tool={tool}/>}
