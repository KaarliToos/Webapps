export type ToolId = "breathing"|"sleep-timer"|"pomodoro"|"sleep-journal"|"water-tracker"|"mood"|"todo"|"routine"|"planner"|"progress"|"notes"|"dream-journal"|"sleep-calculator"|"cardiac-coherence"|"cardiac-coherence-v2"|"habit-tracker"|"pedometer"|"eisenhower"|"quiz";
export type ToolDefinition = { id:ToolId; name:string; subtitle:string; icon:string; category:"sleep"|"focus"|"health"|"mind"; color:string; route:string };
export const tools: ToolDefinition[] = [
 {id:"breathing",name:"Breathing",subtitle:"5 min",icon:"🌊",category:"mind",color:"mint",route:"/tools/breathing"},
 {id:"sleep-timer",name:"Sleep Timer",subtitle:"Wind down",icon:"😴",category:"sleep",color:"sky",route:"/tools/sleep-timer"},
 {id:"pomodoro",name:"Pomodoro",subtitle:"25 min focus",icon:"🍅",category:"focus",color:"peach",route:"/tools/pomodoro"},
 {id:"sleep-journal",name:"Sleep Journal",subtitle:"Track sleep",icon:"📝",category:"sleep",color:"lilac",route:"/tools/sleep-journal"},
 {id:"water-tracker",name:"Water Tracker",subtitle:"Stay hydrated",icon:"💧",category:"health",color:"aqua",route:"/tools/water-tracker"},
 {id:"mood",name:"Mood Tracker",subtitle:"Check in",icon:"🙂",category:"mind",color:"pink",route:"/tools/mood"},
 {id:"todo",name:"To-do List",subtitle:"Plan your day",icon:"✓",category:"focus",color:"peach",route:"/tools/todo"},
 {id:"routine",name:"Routine",subtitle:"Build consistency",icon:"☀️",category:"mind",color:"mint",route:"/tools/routine"},
 {id:"planner",name:"Planner",subtitle:"See your day",icon:"🗓️",category:"focus",color:"lilac",route:"/tools/planner"},
 {id:"progress",name:"Progress",subtitle:"See your growth",icon:"📊",category:"mind",color:"pink",route:"/tools/progress"},
 {id:"notes",name:"Notes",subtitle:"Capture ideas",icon:"📓",category:"mind",color:"lilac",route:"/tools"},
 {id:"dream-journal",name:"Dream Journal",subtitle:"Remember dreams",icon:"☁️",category:"sleep",color:"sky",route:"/tools"},
 {id:"sleep-calculator",name:"Sleep Calculator",subtitle:"Plan rest",icon:"🌙",category:"sleep",color:"lilac",route:"/tools"},
 {id:"cardiac-coherence",name:"Cardiac Coherence",subtitle:"Find calm",icon:"♡",category:"mind",color:"mint",route:"/tools/breathing"},
 {id:"cardiac-coherence-v2",name:"Coherence V2",subtitle:"Guided calm plan",icon:"♡",category:"mind",color:"pink",route:"/tools/cardiac-coherence-v2"},
 {id:"habit-tracker",name:"Habit Tracker",subtitle:"Keep streaks",icon:"🔥",category:"focus",color:"peach",route:"/tools"},
 {id:"pedometer",name:"Pedometer",subtitle:"Move today",icon:"👟",category:"health",color:"aqua",route:"/tools/pedometer"},
 {id:"eisenhower",name:"Eisenhower Matrix",subtitle:"Prioritize",icon:"◇",category:"focus",color:"pink",route:"/tools"},
 {id:"quiz",name:"Daily Quiz",subtitle:"Learn in 1 min",icon:"✦",category:"mind",color:"lilac",route:"/tools/quiz"},
];
export const defaultFavorites: ToolId[] = ["breathing","sleep-timer","pomodoro","sleep-journal","water-tracker"];
