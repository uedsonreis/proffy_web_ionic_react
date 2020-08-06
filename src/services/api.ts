import axios from 'axios';
import { userInfo } from 'os';

class ServiceAPI {

    private readonly api = axios.create({
        baseURL: 'http://localhost:3333/'
    });

    public async getConnections() {
        const response = await this.api.get('connections');
        return response.data;
    }

    public async createNewClass(user: any, objClass: any, schedules: any[]) {
        const response = await this.api.post('classes', { user, objClass, schedules });
        return response.data;
    }

    public async getClasses(filters: any) {
        const response = await this.api.get('classes', { params: { ...filters } });
        return response.data;
    }

    public async createNewConnection(userId: number) {
        const response = await this.api.post('connections', { userId });
        return response.data;
    }

}

export default new ServiceAPI();