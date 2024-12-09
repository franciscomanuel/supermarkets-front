import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoadingService {
  private readonly loading: WritableSignal<boolean> = signal(false);

  setLoading(loading: boolean): void {
    this.loading.set(loading);
  }

  getLoading(): WritableSignal<boolean> {
    return this.loading;
  }
}
