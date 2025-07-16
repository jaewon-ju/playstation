package ps.BE.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

// // SecurityConfig
// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     private final AuthenticationConfiguration authenticationConfiguration;
//     private final JwtUtil jwtUtil;

//     public SecurityConfig(AuthenticationConfiguration authenticationConfiguration, JwtUtil jwtUtil) {
//         this.authenticationConfiguration = authenticationConfiguration;
//         this.jwtUtil = jwtUtil;
//     }

//     @Bean
//     public BCryptPasswordEncoder bCryptPasswordEncoder() {
//         return new BCryptPasswordEncoder();
//     }


//     @Bean
//     public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
//         return configuration.getAuthenticationManager();
//     }

//     @Bean
//     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

//         http.csrf((auth) -> auth.disable());

//         //Form 로그인 방식 disable
//         http.formLogin((auth) -> auth.disable());

//         //http basic 인증 방식 disable
//         http.httpBasic((auth) -> auth.disable());

//         //세션 설정
//         http.sessionManagement((session) -> session
//                 .sessionCreationPolicy(SessionCreationPolicy.STATELESS));

//         http
//                 .addFilterBefore(new JwtFilter(jwtUtil), LoginFilter.class);

//         // 로그인 필터 추가 - 인증 처리 단계에서 실행
//         http.
//                 addFilterAt(new LoginFilter(authenticationManager(authenticationConfiguration), jwtUtil), UsernamePasswordAuthenticationFilter.class);

//         //경로별 인가 작업
//         http.authorizeHttpRequests((auth) -> auth
//                 .requestMatchers("/login", "/", "/register","/swagger-ui/**", "/api-docs/**").permitAll()
//                 //.requestMatchers("/admin").hasRole("ADMIN")
//                 .anyRequest().authenticated());

//         return http.build();
//     }
// }

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())
            .csrf(csrf -> csrf.disable())
            .formLogin(form -> form.disable())
            .httpBasic(httpBasic -> httpBasic.disable());
        return http.build();
    }
}