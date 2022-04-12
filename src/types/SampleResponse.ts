export interface Sample {
  id: string;
}

export interface SampleError {
  message: string;
}

export interface SampleResponse {
  status: number;
  data: Sample | null;
  error: SampleError | null;
}
