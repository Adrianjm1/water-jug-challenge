export type Step = {
    jugX: number;
    jugY: number;
    action: string;
};

export interface StepsTableProps {
    steps: Step[];
}